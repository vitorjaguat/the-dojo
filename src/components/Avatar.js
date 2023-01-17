import './Avatar.css';

export default function Avatar({ src, alt }) {
  return (
    <div className="avatar">
      <img src={src} alt={alt} />
    </div>
  );
}
