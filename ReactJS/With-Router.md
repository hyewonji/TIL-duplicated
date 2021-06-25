### withRouter

- Link없이도 화면 렌더링이 가능하다.

1.  `import { withRouter } from 'react-router-dom';`
2.  Component를 감싸준다.

    1. 방법1

       ```jsx
       const HeaderC = ({ location: { pathname } }) => (
         <Header>
           <List>
             <Item current={pathname === "/"}>
               <SLink to="/">Movies</SLink>
             </Item>
             <Item current={pathname === "/tv"}>
               <SLink to="/tv">TV</SLink>
             </Item>
             <Item current={pathname === "/search"}>
               <SLink to="/search">Search</SLink>
             </Item>
           </List>
         </Header>
       );

       export default withRouter(HeaderC);
       ```

    2. 방법2

       ```jsx
       export default withRouter(({ location: { pathname } }) => (
         //console.log(props)
         <Header>
           <List>
             <Item current={pathname === "/"}>
               <SLink to="/">Movies</SLink>
             </Item>
             <Item current={pathname === "/tv"}>
               <SLink to="/tv">TV</SLink>
             </Item>
             <Item current={pathname === "/search"}>
               <SLink to="/search">Search</SLink>
             </Item>
           </List>
         </Header>
       ));
       ```
