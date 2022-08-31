import style from './Choices.module.css';

const holiday = {
    newjear: 'Новый год',
    birthdayWomen: 'День рождения  Ж',
    birthdayMen: 'День рождения  М',
    womenday: '8 марта',
    knowledgeday: 'День знаний',
}
const Choices = () => (
    <button className={style.button}>Выбрать праздник</button>

);

export default Choices;