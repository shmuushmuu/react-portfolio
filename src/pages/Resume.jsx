import React from "react";
// import resumeImg from

const styles = {
    img: {
        height: 400,
        width: "auto",
    },
    shadow: {
        border: "2 px solid dark-blue",
        boxShadow: "4px 20px 16px #161B23"
    },
};

export default function Resume() {
    return (
        <>
            <div>
                <h1 className="text-center p-2 m-2"> Resume </h1>
            </div>
            <div className="min-vh-100">
                <div className="row">
                    <h4 className="d-flex justify-content-center">
                        {" "}
                        Find below a copy of my resume.
                    </h4>
                </div>
                <div className="row">
                    <div className="d-flex justify center">
                        <a
                        href=
                        // addresume link"// 
                        >
                        <img src={resumeImg} alt="resume" style={styles.img} />    
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}