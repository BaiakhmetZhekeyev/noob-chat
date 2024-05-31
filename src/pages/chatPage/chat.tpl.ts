import styles from './style.module.scss';

export const tpl = ` 
  <section>
        <div class=${styles.container}>
            <div class=${styles.sidebar}> 
                <div class=${styles.profileLinkContainer}>
                    {{{ProfileLink}}}
                </div>
                <div class=${styles.searchInputContainer}>
                    {{{SearchInput}}}
                </div>
                <ul class=${styles.chats}>
                {{#each chats}}
                  {{{this}}}
                {{/each}}
                </ul>
            </div>
            <div class=${styles.currentChat}>
                <div class=${styles.top}>
                    <div class=${styles.topInfo}>
                        {{{Avatar}}}
                        <span class=${styles.username}>Aisultan</span>
                        <button class=${styles.settingsButtonn}></button>
                    </div>
                </div>
                <div>
                    <ul class=${styles.messages}>
                     {{#each messages}}
                        {{{this}}}
                     {{/each}}
                    </ul>
                </div>
                {{{SendMessageForm}}}
            </div>
      </div>
  </section>
`;
