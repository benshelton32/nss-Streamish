import React from "react";
import { Card, CardBody } from "reactstrap";
import "./Video.css";

const Video = ({ video }) => {
    return (
        <Card >
            <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <strong>{video.title}</strong>
                </p>
                <p>{video.description}</p>

                {video.comments.length > 0 &&
                    <section className="commentWrapper">
                        <div className="commentSection">
                            <h6>Comments</h6>
                            <ul>
                                {video.comments.map(comment => {
                                    return <li key={comment.id}>{comment.message}</li>
                                })}
                            </ul>
                        </div>
                    </section>
                }
            </CardBody>
        </Card>
    );
};

export default Video;