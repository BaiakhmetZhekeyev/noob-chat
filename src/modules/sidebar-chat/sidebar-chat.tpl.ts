import styles from './style.module.scss';

export const tpl = `
  <a class=${styles.chatContainer} href="{{url}}">
      <div class=${styles.userInfoContainer}>  
        {{{Avatar}}}
        <div class=${styles.userInfo}>
            <span class=${styles.username}>{{name}}</span>
            <span class=${styles.lastMessage}>{{message}}</span>
        </div>
      </div>
      <div class=${styles.messageInfo}>
          <span class=${styles.time}>{{time}}</span>
          <span class=${styles.numberOfMessages}>{{numberOfMessages}}</span>
      </div>
  </a>
`;
