import React from "react";
import './tool.css';

const Tool = () => {
    return (
        <div className='wrapper-tools' data-aos="fade-right">
            <div className='container'>
                <h1 className='tool-judul'>Developed With</h1>
                <div className='tool-categ'>
                    <div className='categ-1'>
                        <h6 className='cate1judul'>Tools</h6>
                        <div className='card-code'>
                            <p>VS Code</p>
                        </div>
                    </div>
                    <div className='categ-1'>
                        <h6 className='cate1judul'>Language</h6>
                        <div className='card-code-lang'>
                            <p>HTML 5</p>
                            <p className='css'>CSS 3</p>
                            <p className='bootstrap'>Bootstrap</p>
                            <p className='bootstrap'>Javascript</p>
                            <p>React JS</p>
                            <p>Next JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;