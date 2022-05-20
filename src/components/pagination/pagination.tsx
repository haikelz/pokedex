const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
}: {
  postsPerPage: any;
  totalPosts: any;
  paginate: any;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center">
      {pageNumbers.map((number, index) => (
        <p
          className="px-3 py-1.5 bg-blue-600 cursor-pointer"
          onClick={() => paginate(number)}
          key={index + 1}
        >
          {number}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
