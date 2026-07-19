import personalInfo from "../../data/personalInfo";
import { memo } from "react";
function Navbar() {
  return (
    <footer>
      <p>© {new Date().getFullYear()}

{personalInfo.name}

All Rights Reserved.</p>
    </footer>
  );
}

export default memo(Navbar);