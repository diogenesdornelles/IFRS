# Neste projeto

## &TIP&APP Uso do axios
- `npm i axios`


## &TIP&HOOKS

- useEffect: component did mount (Array de dep. empty)

```ts
  
  useEffect(() => {
    axios.get('/user?ID=12345')
      .then(function (response) {
        setUsers(response.data)
      })
      .catch(function (error) {
        console.error(error);
      })
  }, [])
```
