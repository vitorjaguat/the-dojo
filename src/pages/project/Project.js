import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import './Project.css';
import ProjectComments from './ProjectComments';
import ProjectSummary from './ProjectSummary';

export default function Project() {
  const { id } = useParams(); //it's called 'id' because the route's path is '/projects/:id'
  const { error, document } = useDocument('projects', id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
