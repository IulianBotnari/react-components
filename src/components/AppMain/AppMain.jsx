import AppImg from "../Img/AppImg"
import MainStyle from "./AppMain.module.css"
import CardStyle from "./AppCard.module.css"

export default function () {
    //logic here


    //markup here

    return (

        <>
            <main className={MainStyle.main_el}>
                <div className={CardStyle.card_el}>
                    <AppImg />
                    <div>
                        <h3>Titolo del post</h3>
                        <p>
                            lorem ipsum dolor
                        </p>


                    </div>
                </div>
            </main>

        </>
    )
}