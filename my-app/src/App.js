import './App.css';

import Card from './components/Card';
import Link from './components/Link';

export default function App() {
    return (

        <div className="App">
            <Card text='first text'/>
            <Card text='second text' />
            <Card text='third text' />
            <Card text='bedroom text' />
            
            <Link happy={true} />
            <Link happy={false} />
        </div>
    );
}
