import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { SOCIAL_ICON_SIZE } from "../../consts";
export const socialIcons: any = [
  {
    linkedIn: (
      <LinkedInLogoIcon height={SOCIAL_ICON_SIZE} width={SOCIAL_ICON_SIZE} />
    ),
    github: (
      <GitHubLogoIcon height={SOCIAL_ICON_SIZE} width={SOCIAL_ICON_SIZE} />
    ),
    twitter: (
      <TwitterLogoIcon height={SOCIAL_ICON_SIZE} width={SOCIAL_ICON_SIZE} />
    ),
  },
];
