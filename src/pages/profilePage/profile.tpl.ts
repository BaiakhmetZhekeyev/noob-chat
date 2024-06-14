import styles from './style.module.scss';

export const tpl = `
<div class=${styles.profile}>
    <div class=${styles.profileContainer}>
        <div class=${styles.avatarContainer}>
            {{{Avatar}}}
            <span class=${styles.infoLabel}>Baiakhmet</span> 
        </div>
        <div class=${styles.infoContainer}>
            <div class=${styles.info}>
                <span class=${styles.infoLabel}>Email</span>
                <span class=${styles.infoValue}>pochta@yandex.ru</span>
            </div>
            <div class=${styles.info}>
                <span class=${styles.infoLabel}>Login</span>
                <span class=${styles.infoValue}>baiakhmet</span>
            </div>
            <div class=${styles.info}>
                <span class=${styles.infoLabel}>First name</span>
                <span class=${styles.infoValue}>Baiakhmet</span>
            </div>
            <div class=${styles.info}>
                <span class=${styles.infoLabel}>Second name</span>
                <span class=${styles.infoValue}>Zhekeyev</span>
            </div>
            <div class=${styles.info}>
                <span class=${styles.infoLabel}>Display name</span>
                <span class=${styles.infoValue}>Baya</span>
            </div>
            <div class=${styles.info}>
                <span class=${styles.infoLabel}>Phone</span>
                <span class=${styles.infoValue}>+708 777 77 77</span>
            </div>
        </div>
        <div class=${styles.buttonContainer}>
            {{{ChangeUserInfoLink}}}
            {{{ChangePasswordLink}}}
            {{{LogoutBtn}}}
        </div>
    </div>
</div>
`;
