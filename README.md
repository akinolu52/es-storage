# es-storage

Access client storage

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install es-storage.

```bash
npm install es-storage
```

## Usage

```javascript
import { localStorage, sessionStorage } from 'es-storage';


sessionStorage.set('key', null)
sessionStorage.get('key') # returns null
//passing an default value to be returned when then the value is not found
sessionStorage.get('key', 'default-value') # returns 'default-value'

sessionStorage.set('key', 'value')
sessionStorage.get('key') # returns 'value'

sessionStorage.setObject('details', null)
sessionStorage.getObject('details') # returns null
//passing an default value to be returned when then the value is not found
sessionStorage.getObject('details', { key: 'x', value: 'y' }) # returns { key: 'x', value: 'y' }

sessionStorage.clear()  # this will clear all the data on the sessionstorage
sessionStorage.remove('key') # this will delete the key from the sessionstorage


localStorage.set('key', null)
localStorage.get('key') # returns null
//passing an default value to be returned when then the value is not found
localStorage.get('key', 'default-value') # returns 'default-value'

localStorage.set('key', 'value')
localStorage.get('key') # returns 'value'

localStorage.setObject('details', null)
localStorage.getObject('details') # returns null
//passing an default value to be returned when then the value is not found
localStorage.getObject('details', { key: 'x', value: 'y' }) # returns { key: 'x', value: 'y' }

localStorage.clear()  # this will clear all the data on the localstorage
localStorage.remove('key') # this will delete the key from the localstorage

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GNU](https://www.gnu.org/licenses)