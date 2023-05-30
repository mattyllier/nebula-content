import './Language.css'

export default function Language({language}){
    return (
        <div className='language'>
        <h1>{language.name}</h1>
        <img src={language.img} className='logo' alt='languageLogo'></img>
            <ul>
                <li>Version: {language.version}</li>
                <li>Is In Use: {language.isInUse ? 'Yes' : 'No'}</li>
            </ul>
        </div>
    )
}