import React from 'react'
import s from './Dialogs.module.css'
import Button from "../Buttons/Button";

const Dialogs = () => {
    return (
       <main>
            <div className={s.dialogs}>
                <div className={s.dialog_items}>
                    <div className={s.dialog + ' ' + s.active}>
                        <div className={s.ava}>
                            <img src="https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false" />
                        </div>
                        <h3 className={s.name}>Богдан Викулин</h3>
                    </div>
                    <div className={s.dialog}>
                        <div className={s.ava}>
                            <img src="https://avatars.mds.yandex.net/get-pdb/1572252/173c33b8-3b08-4930-9f41-a677e14d5fd7/s1200?webp=false" />
                        </div>
                        <h3 className={s.name}>Саша Протасова</h3>
                    </div>
                    <div className={s.dialog}>
                        <div className={s.ava}>
                            <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" />
                        </div>
                        <h3 className={s.name}>Никита Бондаренко</h3>
                    </div>
                    <div className={s.dialog}>
                        <div className={s.ava}>
                            <img src="https://w-dog.ru/wallpapers/14/3/531077488804089.jpg" />
                        </div>
                        <h3 className={s.name}>Эмилия Бондаренко</h3>
                    </div>
                </div>

                <div className={s.messages} value="inter">


                    <div className={s.scroll}>
                        <div className={s.message_wrap}>
                            <div className={s.message}>
                                <div className={s.text}>Hi!</div>
                                <div className={s.who}>Bogdan</div>
                            </div>
                        </div>

                        <div className={s.message_wrap} value="me">
                            <div className={s.message}>
                                <div className={s.text}>Hello! My boyfriend)</div>
                                <div className={s.who}>Me</div>
                            </div>
                        </div>

                        <div className={s.message_wrap} value="me">
                            <div className={s.message}>
                                <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum impedit itaque nihil perspiciatis. Aut, expedita!</div>
                                <div className={s.who}>Me</div>
                            </div>
                        </div>

                        <div className={s.message_wrap}>
                            <div className={s.message}>
                                <div className={s.text}>Ok</div>
                                <div className={s.who}>Bogdan</div>
                            </div>
                        </div>

                        <div className={s.message_wrap} value="me">
                            <div className={s.message}>
                                <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, odio?</div>
                                <div className={s.who}>Me</div>
                            </div>
                        </div>

                        <div className={s.message_wrap}>
                            <div className={s.message}>
                                <div className={s.text}>Hi!</div>
                                <div className={s.who}>Bogdan</div>
                            </div>
                        </div>
                    </div>


                    <div className={s.field}>
                        <textarea placeholder="Напишите сообщение..."></textarea>
                        <Button name="Отправить"/>
                    </div>

                </div>
            </div>
       </main>
    )
}

export default Dialogs