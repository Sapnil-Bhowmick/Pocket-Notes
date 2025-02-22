# Persist Store
  - redux-persist automatically saves the Redux state (groupSlice) in localStorage (or AsyncStorage in React Native).
  - persistReducer wraps the root reducer, enabling persistence.
  - persistStore ensures the store rehydrates from storage when the app loads.
  - PersistGate delays rendering until the state is rehydrated.

# Whitelist Info
  - We should use whitelist when we only want to persist specific reducers while ignoring others.

# Default Behaviour
  - By default, redux-persist persists the entire state unless we specify a blacklist or whitelist. 
  - Since I want to persist the entire groupSlice, there's no need to use whitelist.

