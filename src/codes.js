import codes from 'statuses/codes.json'

const codeList = []

for (let key in codes) {
  codeList.push({
    key,
    value: codes[key]
  })
}

export default codeList
