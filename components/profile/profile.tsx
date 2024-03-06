import styles from "./profile.module.sass";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill, PiUserFill } from "react-icons/pi";

export default function Profile() {
  const profileData = {
    name: "박정선",
    phone: "010-9792-9767",
    email: "finchblue8@gmail.com",
  } as const;

  const profileIcon = {
    name: <PiUserFill size={16} />,
    phone: <PiPhoneFill size={16} />,
    email: <MdEmail size={16} />,
  } as const;

  type ProfileIconType = typeof profileData;

  return (
    <ul className={styles.profileList}>
      {Object.entries(profileData).map(([key, value]) => (
        <li key={key} className={styles.profileItem}>
          <div className={styles.profileIcon}>
            {profileIcon[key as keyof ProfileIconType]}
          </div>
          <div>{value}</div>
        </li>
      ))}
    </ul>
  );
}
