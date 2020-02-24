export const createSchema = names => `
      query getUsers {
        ${names
          .map(
            (name, idx) => `user${idx}: user(login: "${name}") {
          ...UserFields
        }`
          )
          .flat()}
      }
      fragment UserFields on User {
            login
            createdAt
            id
            email
            name
            company
            bio
            avatarUrl(size: 100)
            followers {
              totalCount
            }
            following {
              totalCount
            }
            websiteUrl
          }
    `;
