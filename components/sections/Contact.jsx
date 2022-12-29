import React, { useRef, useEffect, useReducer, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";
import LangContext from "../context/LangContext";
import Heading from "../uicomponents/animationVariants/Heading";

const initialState = {
	name: "",
	email: "",
	message: "",
	nameAlert: "",
	emailAlert: "",
	messageAlert: "",
	feedbackMsg: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "update_name":
			return { ...state, name: action.payload };
		case "update_email":
			return { ...state, email: action.payload };
		case "update_message":
			return { ...state, message: action.payload };
		case "name_alert":
			return { ...state, nameAlert: action.payload };
		case "email_alert":
			return { ...state, emailAlert: action.payload };
		case "message_alert":
			return { ...state, messageAlert: action.payload };
		case "feedback_message":
			return { ...state, feedbackMsg: action.payload };
		default:
			return state;
	}
}

function Contact() {
	const { isEng } = useContext(LangContext);
	const [state, dispatch] = useReducer(reducer, initialState);

	const formRef = useRef();

	const emailRegex = /\S+@\S+\.\S+/;

	//removes success message
	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch({ type: "feedback_message", payload: "" });
		}, 5000);
		return () => clearTimeout(timer);
	});

	function handleName(e) {
		if (!state.name) {
			dispatch({ type: "name_alert", payload: null });
		} else if (state.name !== "" && state.name.trim().length <= 4) {
			dispatch({ type: "name_alert", payload: "must be atleast 4 characters" });
		} else {
			dispatch({ type: "name_alert", payload: <FaCheck className="text-success" /> });
		}

		dispatch({ type: "update_name", payload: e.target.value });
	}
	function handleEmail(e) {
		if (!state.email) {
			dispatch({ type: "email_alert", payload: null });
		} else if (emailRegex.test(state.email)) {
			dispatch({ type: "email_alert", payload: <FaCheck className="text-success" /> });
		} else {
			dispatch({ type: "email_alert", payload: "please enter valid email" });
		}

		dispatch({ type: "update_email", payload: e.target.value });
	}
	function handleMessage(e) {
		if (!state.message) {
			dispatch({ type: "message_alert", payload: null });
		} else if (state.message !== "" && state.message.trim().length <= 10) {
			dispatch({ type: "message_alert", payload: "must be atleast 10 characters" });
		} else {
			dispatch({ type: "message_alert", payload: <FaCheck className="text-success" /> });
		}
		dispatch({ type: "update_message", payload: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!state.name && state.name.trim().length <= 4) {
			dispatch({ type: "name_alert", payload: "must be atleast 4 characters" });
		}
		if (!emailRegex.test(state.email)) {
			dispatch({ type: "email_alert", payload: "please enter valid email" });
		}
		if (!state.message && state.message.trim().length <= 10) {
			dispatch({ type: "message_alert", payload: "must be atleast 10 characters" });
		}
		if (state.name.trim().length >= 4 && emailRegex.test(state.email) && state.email && state.message.trim().length >= 10) {
			emailjs.sendForm("service_razjftm", "template_ajxy6dn", formRef.current, "user_LG7vK3Lix7E0XaCiTXL0L").then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

			dispatch({ type: "feedback_message", payload: `${isEng ? "Thank you for your message!" : "Takk for din melding, jeg tar kontakt!"}` });
			state.name = "";
			state.email = "";
			state.message = "";
			state.nameAlert = "";
			state.emailAlert = "";
			state.messageAlert = "";
		}
	};

	return (
		<section className="flex flex-col items-center gap-4  py-16 sm:py-32 px-1 lg:min-h-screen  justify-center bg-base-100" id="contact">
			<Heading heading={isEng ? "CONTACT" : "KONTAKT"} />
			<div className="form-container">
				<div className="form-aside ">
					<p className="text-3xl mb-2 text-center text-base-100 ">{isEng ? "Please leave a message," : "Legg igjen melding,"}</p>
					<p className=" text-4xl sm:text-5xl text-center  text-base-100 ">
						{isEng ? "Let us build something amazing together..." : "La oss bygge noe fantastisk sammen....."}
					</p>
				</div>
				<form ref={formRef} className="form " onSubmit={handleSubmit}>
					{state.feedbackMsg && <div className="success">{state.feedbackMsg}</div>}
					<div className="form-control  w-full ">
						<label htmlFor="name" className="mb-2">
							<span className="form-spans">{state.nameAlert && <div className="error">{state.nameAlert} </div>}</span>
						</label>
						<input
							type="text"
							name="user_name"
							className="input-form"
							placeholder={isEng ? "name" : "navn"}
							onChange={handleName}
							value={state.name}
						/>
					</div>
					<div className="form-control  w-full">
						<label htmlFor="email" className="mb-2">
							<span className="form-spans">
								{state.emailAlert && (
									// <HeadShake>
									<div className="error">{state.emailAlert} </div>
									// </HeadShake>
								)}
							</span>
						</label>
						<input
							type="text"
							name="user_email"
							className="input-form"
							placeholder={isEng ? "email" : "epost"}
							onChange={handleEmail}
							value={state.email}
						/>
					</div>
					<div className="form-control h-full  w-full">
						<label htmlFor="message" className="mb-8">
							<span className="form-spans">
								{state.messageAlert && (
									// <HeadShake>
									<div className="error">{state.messageAlert}</div>
									// </HeadShake>
								)}
							</span>
						</label>
						<textarea
							name="message"
							className="text-area "
							placeholder={isEng ? "message" : "melding"}
							onChange={handleMessage}
							value={state.message}
						/>
					</div>
					<button className="btn-primary btn-md btn w-full mt-5" type="submit">
						Send
					</button>
				</form>
			</div>
			{/* </Bounce> */}
		</section>
	);
}

export default Contact;

// contact function with useState

// function Contact() {
// 	const [state, dispatch] = useReducer(reducer, initialState);

// 	const formRef = useRef();
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [message, setMessage] = useState("");
// 	const [feedbackMsg, setFeedbackMsg] = useState("");
// 	const [nameAlert, setNameAlert] = useState("");
// 	const [emailAlert, setEmailAlert] = useState("");
// 	const [messageAlert, setMessageAlert] = useState("");
// 	const emailRegex = /\S+@\S+\.\S+/;

// 	//removes success message
// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			setFeedbackMsg("");
// 		}, 5000);
// 		return () => clearTimeout(timer);
// 	});

// 	function handleName(e) {
// 		if (name === "") {
// 			setNameAlert(null);
// 		} else if (name !== "" && name.trim().length <= 4) {
// 			setNameAlert("must be atleast 4 characters");
// 		} else {
// 			setNameAlert(<FaCheck className="text-success" />);
// 		}

// 		setName(e.target.value);
// 	}
// 	function handleEmail(e) {
// 		if (!email) {
// 			setEmailAlert(null);
// 		} else if (emailRegex.test(email)) {
// 			setEmailAlert(<FaCheck className="text-success" />);
// 		} else {
// 			setEmailAlert("please enter valid email");
// 		}
// 		setEmail(e.target.value);
// 	}
// 	function handleMessage(e) {
// 		if (!message) {
// 			setMessage(null);
// 		} else if (message !== "" && message.trim().length <= 10) {
// 			setMessageAlert("must be atleast 10 characters");
// 		} else {
// 			setMessageAlert(<FaCheck className="text-success" />);
// 		}
// 		setMessage(e.target.value);
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (!name && name.trim().length <= 4) {
// 			setNameAlert("must be atleast 4 characters");
// 		}
// 		if (!emailRegex.test(email)) {
// 			setEmailAlert("please enter valid email");
// 		}
// 		if (!message && message.trim().length <= 10) {
// 			setMessageAlert("must be atleast 10 characters");
// 		}
// 		if (name.trim().length >= 4 && emailRegex.test(email) && email && message.trim().length >= 10) {
// 			emailjs.sendForm("service_razjftm", "template_ajxy6dn", formRef.current, "user_LG7vK3Lix7E0XaCiTXL0L").then(
// 				(result) => {
// 					console.log(result.text);
// 				},
// 				(error) => {
// 					console.log(error.text);
// 				}
// 			);
// 			setFeedbackMsg("Thank you for your messge!!!");
// 			setName("");
// 			setNameAlert("");
// 			setEmail("");
// 			setEmailAlert("");
// 			setMessage("");
// 			setMessageAlert("");
// 		}
// 	};

// 	return (
// 		<section className="flex flex-col items-center gap-4  py-16 sm:py-32 px-1 lg:h-screen  justify-center bg-base-200" id="contact">
// 			<h2>Kontakt</h2>
// 			<div className="form-container">
// 				<div className="form-aside">
// 					<p className="text-xl mb-2 text-center">Legg igjen melding,</p>
// 					<p className="text-4xl text-center">La oss bygge noe fantastisk sammen..... </p>
// 				</div>
// 				<form ref={formRef} className="form " onSubmit={handleSubmit}>
// 					{feedbackMsg && <div className="success">{feedbackMsg}</div>}
// 					<div className="form-control  w-full ">
// 						<label htmlFor="name" className="mb-2">
// 							<span className="form-spans">{nameAlert && <div className="error">{nameAlert} </div>}</span>
// 						</label>
// 						<input type="text" name="user_name" className="input-form" placeholder="navn" onChange={handleName} value={name} />
// 					</div>
// 					<div className="form-control  w-full">
// 						<label htmlFor="email" className="mb-2">
// 							<span className="form-spans">{emailAlert && <div className="error">{emailAlert} </div>}</span>
// 						</label>
// 						<input type="text" name="user_email" className="input-form" placeholder="epost" onChange={handleEmail} value={email} />
// 					</div>
// 					<div className="form-control h-full  w-full">
// 						<label htmlFor="message" className="mb-8">
// 							<span className="form-spans">{messageAlert && <div className="error">{messageAlert}</div>}</span>
// 						</label>
// 						<textarea name="message" className="text-area " placeholder="melding" onChange={handleMessage} value={message} />
// 					</div>
// 					<button className="btn-primary btn-md btn w-full mt-5" type="submit">
// 						Send
// 					</button>
// 				</form>
// 			</div>
// 		</section>
// 	);
// }

// export default Contact;
