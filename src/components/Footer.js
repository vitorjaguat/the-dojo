import './Footer.css';

export default function Footer({ user }) {
  return (
    <>
      {user && (
        <div className="footer">
          <p>Some rights reserved</p>
          <p>2023</p>
        </div>
      )}
      {!user && (
        <div className="footer no-user">
          <p>Some rights reserved</p>
          <p>2023</p>
        </div>
      )}
    </>
  );
}
