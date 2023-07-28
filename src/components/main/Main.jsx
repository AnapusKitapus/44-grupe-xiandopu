import style from './Main.module.css';
import {Column} from './Column';

export function Main() {
    return (
        <main className={style.main}>
            <div>
                Well begun is half done
            </div>
            <div>
                <div>
                Todays data
                    <a href='/'>More</a>
                    <div>
                        <Column></Column>
                        <Column></Column>
                        <Column></Column>
                        <Column></Column>
                    </div>
                </div>
                <div>
                    Operations Assistant
                    <a href='/'>More</a>
                    <div>
                        <Column></Column>
                        <Column></Column>
                        <Column></Column>
                        <Column></Column>
                    </div>
                </div>
            </div>
        </main>
    );
}