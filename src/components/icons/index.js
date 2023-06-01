import './icons.css'
function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-pin"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#886d9d"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
      <path d="M9 15l-4.5 4.5" />
      <path d="M14.5 4l5.5 5.5" />
    </svg>
  );
}
function Pinned() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-pinned-filled"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#886d9d"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
}
function Edit() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-edit"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#886d9d"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
      <path d="M16 5l3 3" />
    </svg>
  );
}
function Close() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#886d9d"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
export {Pin, Pinned, Edit, Close};
