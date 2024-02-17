import { SHOW_SOCIAL_ICONS, SOCIAL_LINKS } from "../consts";
import { socialIcons } from "./assets/Icons";
const SocialLinks = () => {
  return (
    <div>
      <div className="flex space-x-8">
        {SOCIAL_LINKS.map((link) => {
          return (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary">
              {SHOW_SOCIAL_ICONS ? (
                <div>{socialIcons["0"][link.name]}</div>
              ) : (
                <span className="text-sm"> {link.name}</span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
