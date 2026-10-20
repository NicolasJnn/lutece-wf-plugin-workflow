function removeComment(idHistory, idTask) {
  const form = document.createElement('form');
  form.action = 'jsp/admin/plugins/workflow/modules/comment/ConfirmRemoveComment.jsp?' + 'id_history=' + idHistory + '&id_task=' + idTask + '&return_url=' + encodeURIComponent(window.location.href);
  form.method = 'post';
  document.body.appendChild(form);
  form.submit();
  form.remove();
}