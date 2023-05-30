import Language from '../Language/Language'
import './LanguageList.css'

export default function LanguageList({data}){
    return (
        <div className='listContainer'>
            <div className='languageList'>
                {data.languages.map(language=><Language key={language.name} language={language}/>)}
            </div>
        </div>
    )
}