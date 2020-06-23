import React from 'react';
import { Rating } from 'semantic-ui-react';

const Feedback = () => {
    return (
        <div className="feedbacks__card">
            <div className="feedbacks__card-title">
                <div className="feedbacks__card-name">Айдана А.</div>
                <Rating maxRating={5} disabled />
                <div className="feedbacks__card-date">
                    <span className="date">14.09.2019</span>
                    <span className="time">22:12</span>
                </div>
            </div>
            <p className="feedbacks__card-text">
                Decrēvit quondam senātus, ut L. Opimius consul vidēret, ne quid res publĭca detrimenti capĕret: nox nulla intercessit— interfectus est propter quasdam seditiōnum suspiciōnes C. Gracchus, clarissĭmo patre, avo, majorĭbus; occīsus est cum libĕris M. Fulvius consulāris. Simĭli senātus consulto C. Mario et L. Valerio consulĭbus est permissa res publĭca: num unum diem postea L. Saturnīnum tribūnum plebis et C. Servilium praetōrem mors ac rei publĭcae poena remorāta est?
            </p>
        </div>
    );
};

export default Feedback;