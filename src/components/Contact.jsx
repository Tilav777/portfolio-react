import { useState, useEffect } from "react"

function Contact() {

    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState({
        name: '',
        email: '',
        number: '',
        tgUser: '',
        bigMessage: ''
    })

    const allMessage = `Full Name: ${message.name} %0A Email: ${message.email} %0A Mobile Number: ${message.number} %0A Telegram: ${message.tgUser} %0A Message: 👇👇 %0A ${message.bigMessage}`


    async function getReq(e) {
        e.preventDefault()
        setLoader(true)
        await fetch(`https://api.telegram.org/bot6358345393:AAGm2eRzhefHU7vWgZswC0La8XaISprGVJs/sendMessage?chat_id=5281539071&text=${allMessage}`)
        setLoader(false)
    }

  return (
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me !</span></h2>
        {!loader ? (<form onSubmit={getReq}>
            <div className="input-box">
                <div className="input-field">
                    <input type="text" placeholder="Full Name" onChange={(e)=> setMessage(prev => {
                        return {
                            ...prev,
                            name: e.target.value
                        }
                    })} required autoComplete="off"/>
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Email Address" onChange={(e)=> setMessage(prev => {
                        return {
                            ...prev,
                            email: e.target.value
                        }
                    })} required autoComplete="off"/>
                    <span className="focus"></span>
                </div>
            </div>
            <div className="input-box">
                <div className="input-field">
                    <input type="text" placeholder="Mobile Number" onChange={(e)=> setMessage(prev => {
                        return {
                            ...prev,
                            number: e.target.value
                        }
                    })} required autoComplete="off"/>
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Telegram Username" onChange={(e)=> setMessage(prev => {
                        return {
                            ...prev,
                            tgUser: e.target.value
                        }
                    })} required autoComplete="off"/>
                    <span className="focus"></span>
                </div>
            </div>
            <div className="textarea-field">
                <textarea cols="30" rows="10" placeholder="Your Message" onChange={(e)=> setMessage(prev => {
                        return {
                            ...prev,
                            bigMessage: e.target.value
                        }
                    })} required autoComplete="off"></textarea>
                <span className="focus"></span>
            </div>
            <div className="btn-box btns">
                <button className="btn" type="submit">Submit</button>
            </div>
        </form>) :
        (<div className="loader-box">
            <span className="loader"></span>
        </div>)}
    </section>
  )
}

export default Contact