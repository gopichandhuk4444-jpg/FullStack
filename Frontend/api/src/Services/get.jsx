export function DisplayComments({comments}){
    return (
        <div>
            <h2>List of Comments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>PostId</th><th>Name</th><th>Email</th><th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(({id,postId,name,email,body})=>(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{postId}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}