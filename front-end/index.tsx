import 'front-end/@imports'
import { createRoot } from 'react-dom/client'
import 'styles/Page.scss'

import Game from './Front-End-Game'

import './index.scss'

createRoot(document.querySelector('#root')!).render(<Game />)
