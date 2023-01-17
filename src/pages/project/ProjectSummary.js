import { useHistory } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import Avatar from '../../components/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function ProjectSummary({ project }) {
  const history = useHistory();
  const { deleteDocument } = useFirestore('projects');
  const { user } = useAuthContext();

  const handleClick = (e) => {
    deleteDocument(project.id);
    history.push('/');
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="created-by">by {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} alt={user.displayName} />
            </div>
          ))}
        </div>
      </div>
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}
