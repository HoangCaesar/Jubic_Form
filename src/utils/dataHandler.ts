import { FormValues } from '../components/form/Content';

const setData = (data: FormValues) => {
    const id = Math.floor(Math.random() * (data.author.length * data.description.length));
    localStorage.setItem(`Blog Of ${data.author} ::: ${id} `, JSON.stringify(data));
};

const getData = () => {
    const data = { ...localStorage }
    return data;
};

export { setData };
