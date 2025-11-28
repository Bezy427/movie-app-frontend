import React from 'react'

const MovieDetails = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            className="card-img-top" alt="Product Image"/>
                        <div className="card-body">
                            <div className="row g-2">
                                <div className="col-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                        className="img-thumbnail" alt="Thumbnail 1"/>
                                </div>
                                <div className="col-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                        className="img-thumbnail" alt="Thumbnail 2"/>
                                </div>
                                <div className="col-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1451859757691-f318d641ab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                        className="img-thumbnail" alt="Thumbnail 3"/>
                                </div>
                                <div className="col-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1490915785914-0af2806c22b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                                        className="img-thumbnail" alt="Thumbnail 4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    );
}

export default MovieDetails;
