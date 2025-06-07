import { createApp } from 'vue'
import Test from '../components/test.vue'

console.log('content.ts')

const root = document.createElement('div')
root.id = 'my-native-element-root'
root.style.backgroundColor = 'red'
root.style.height = '100px'
root.style.width = '100%'

root.innerHTML = 'Hello World native !'
root.style.display = 'flex'
root.style.flexDirection = 'column'
root.style.justifyContent = 'center'
root.style.alignItems = 'center'
root.style.color = 'white'
root.style.fontSize = '20px'
root.style.fontWeight = 'bold'
root.style.textAlign = 'center'

const text = document.createElement('p')
text.innerHTML = 'Injected by content.ts'
text.style.color = 'white'
text.style.fontSize = '10px'
text.style.textAlign = 'center'

root.appendChild(text)
document.body.appendChild(root)

// Vue part
const rootVue = document.createElement('div')
rootVue.id = 'my-vue-root'
document.body.appendChild(rootVue)

const app = createApp(Test)
app.mount('#my-vue-root')
