import React from 'react';
import classes from './DescriptionBlock.module.scss';

const DescriptionBlock = () => {
    return (
        <div className={classes.main}>
            <div className={classes.descriptionBlock}>
                5S – сокращение от “5 Steps” (пять шагов) представляет собой инструмент для обеспечения системы бережливого производства, 
                рационализации рабочего места с помощью маркировки. Это не “стандартизация уборки”, 
                а философия экономного, успешного, бережливого производства. 
                Цели 5S
                <ul>
                    <li>создание комфортного психологического климата, стимулирование желания работать;</li>
                    <li>повышение производительности труда;</li>
                    <li>снижение числа несчастных случаев;</li>
                    <li>повышение уровня качества продукции, снижение количества дефектов.</li>
                </ul>
            </div>
            <div className={classes.main__img}>
                <img src="https://opt-1298738.ssl.1c-bitrix-cdn.ru/upload/iblock/21f/21f671f02f99cbddbdbdd434a4799a28.png?1563438602207524" alt="system5s"/>
            </div>
        </div>
    )
};

export default DescriptionBlock;