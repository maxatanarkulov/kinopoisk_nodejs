
function blockUser(id, adminId){
    axios.post(`/api/blockuser/${id}`).then((data) => {
        if (data.status == 200) {
            location.replace(`/admin/${adminId}`);
        } else if (data.status == 404) {
            location.replace(`/not-found`);
        }
    });
}
function unlockUser(id, adminId){
    axios.post(`/api/unlockuser/${id}`).then((data) => {
        if (data.status == 200) {
            location.replace(`/admin/${adminId}`);
        } else if (data.status == 404) {
            location.replace(`/not-found`);
        }
    });
}
function deleteUser(id, adminId){
    axios.delete(`/api/deleteuser/${id}`).then((data) => {
        if (data.status == 200) {
            location.replace(`/admin/${adminId}`);
        } else if (data.status == 404) {
            location.replace(`/not-found`);
        }
    });


}