import React, { useRef } from 'react';
import classes from './DescriptionBlock.module.scss';
import ScrollToBottom from '../../ScrollToBottom/ScrollToBottom';
import SystemImg from '../../../images/3.gif';

const DescriptionBlock = () => {

    const mainDescriptionBlock = useRef(null);

    return (
        <div className={classes.main} ref={mainDescriptionBlock}>
            
            <ScrollToBottom mainDescriptionBlock={mainDescriptionBlock}/>

            <div className={classes.descriptionBlock}>
                <h1>Система 5S</h1>
                <p>
                    <span>5S – сокращение от “5 Steps” (пять шагов) представляет собой инструмент для обеспечения системы бережливого производства, 
                    рационализации рабочего места с помощью маркировки. Это не “стандартизация уборки”, 
                    а философия экономного, успешного, бережливого производства.</span>
                </p>
                <div className={classes.descriptionBlock__5s}>
                    <div className={classes.descriptionBlock__title}>Цели 5S</div>
                    <div>
                        <ul>
                            <li>создание комфортного психологического климата, стимулирование желания работать;</li>
                            <li>повышение производительности труда;</li>
                            <li>снижение числа несчастных случаев;</li>
                            <li>повышение уровня качества продукции, снижение количества дефектов.</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.main__img}>
                    <img src={SystemImg} alt={"system5s"}/>
                </div>
                <p>
                    Руководствуясь принципом "совершенствование", был придуман этот сайт, как замена бумажной версии журнала. 
                </p>
                <p>
                    Этот сайт-приложение создан на основе современного стека технологий: React, Redux, Axios, Material-Ui, Firebase. Используя эти инструменты,
                    приложение имеет возможность масштабирования, добавлении новых функций и инструментов. 
                </p>
                <p>
                    Предполагается создание личного профиля рабочего, что позволит добавить программы отслеживания деталей на участке, журнал изготовленной продукции и пр. 
                    В то же время, ряд решений носит тестовый характер и будут в ближайшее время заменены.
                </p>
            </div>
        </div>
    )
};

export default DescriptionBlock;