import personalInfo from "../../data/personalInfo";
function Navbar() {
  return (
    <footer>
      <p>© {new Date().getFullYear()}

{personalInfo.name}

All Rights Reserved.</p>
    </footer>
  );
}

export default Navbar;