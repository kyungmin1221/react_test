import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiLogOut, FiX, FiCheck } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { fetchProjects, createProject, updateProject, deleteProject } from '../api/projectApi';
import './AdminDashboard.css';

const EMPTY_FORM = {
  title: '',
  description: '',
  techStack: '',
  githubUrl: '',
  demoUrl: '',
  period: '',
};

function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await fetchProjects();
    setProjects(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openAddForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(', '),
      githubUrl: project.githubUrl || '',
      demoUrl: project.demoUrl || '',
      period: project.period,
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      ...form,
      techStack: form.techStack.split(',').map((s) => s.trim()).filter(Boolean),
    };

    if (editingId) {
      await updateProject(editingId, projectData);
    } else {
      await createProject(projectData);
    }

    closeForm();
    loadProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setConfirmDelete(null);
    loadProjects();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <section className="admin-dashboard">
      <div className="admin-dashboard-inner">
        <div className="admin-header">
          <div>
            <h1>관리자 대시보드</h1>
            <p className="admin-subtitle">프로젝트를 추가, 수정, 삭제할 수 있습니다.</p>
          </div>
          <div className="admin-header-actions">
            <button className="btn btn-primary" onClick={openAddForm}>
              <FiPlus size={18} /> 프로젝트 추가
            </button>
            <button className="btn btn-outline" onClick={handleLogout}>
              <FiLogOut size={18} /> 로그아웃
            </button>
          </div>
        </div>

        {showForm && (
          <div className="admin-form-overlay" onClick={closeForm}>
            <div className="admin-form-card" onClick={(e) => e.stopPropagation()}>
              <div className="admin-form-header">
                <h2>{editingId ? '프로젝트 수정' : '새 프로젝트 추가'}</h2>
                <button className="icon-btn" onClick={closeForm}>
                  <FiX size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">프로젝트 제목</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="프로젝트 이름"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">설명</label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="프로젝트에 대한 설명을 입력하세요"
                    rows={4}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="techStack">기술 스택 (쉼표로 구분)</label>
                  <input
                    type="text"
                    id="techStack"
                    name="techStack"
                    value={form.techStack}
                    onChange={handleChange}
                    placeholder="Java, Spring Boot, MySQL"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="githubUrl">GitHub URL</label>
                    <input
                      type="url"
                      id="githubUrl"
                      name="githubUrl"
                      value={form.githubUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demoUrl">Demo URL</label>
                    <input
                      type="url"
                      id="demoUrl"
                      name="demoUrl"
                      value={form.demoUrl}
                      onChange={handleChange}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="period">기간</label>
                  <input
                    type="text"
                    id="period"
                    name="period"
                    value={form.period}
                    onChange={handleChange}
                    placeholder="2025.01 - 2025.06"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn">
                  <FiCheck size={18} /> {editingId ? '수정 완료' : '추가'}
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="admin-project-list">
          {projects.length === 0 ? (
            <div className="empty-state">
              <p>등록된 프로젝트가 없습니다.</p>
              <button className="btn btn-primary" onClick={openAddForm}>
                <FiPlus size={18} /> 첫 프로젝트 추가
              </button>
            </div>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="admin-project-item">
                <div className="admin-project-info">
                  <h3>{project.title}</h3>
                  <p className="admin-project-period">{project.period}</p>
                  <p className="admin-project-desc">{project.description}</p>
                  <div className="admin-project-tech">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="admin-project-actions">
                  <button
                    className="icon-btn edit"
                    onClick={() => openEditForm(project)}
                    title="수정"
                  >
                    <FiEdit2 size={18} />
                  </button>
                  {confirmDelete === project.id ? (
                    <div className="confirm-delete">
                      <span>삭제?</span>
                      <button
                        className="icon-btn danger"
                        onClick={() => handleDelete(project.id)}
                        title="확인"
                      >
                        <FiCheck size={16} />
                      </button>
                      <button
                        className="icon-btn"
                        onClick={() => setConfirmDelete(null)}
                        title="취소"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="icon-btn danger"
                      onClick={() => setConfirmDelete(project.id)}
                      title="삭제"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
