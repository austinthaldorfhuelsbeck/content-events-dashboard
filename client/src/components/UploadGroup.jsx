const UploadGroup = ({ label, id, accept, percent, onChange, value }) => (
	<div className="flex-1 text-gray-400 m-5">
		<label
			className="flex flex-col items-center px-4 py-6 rounded-lg shadow-md tracking-wide uppercase border border-gray-600 cursor-pointer hover:bg-gray-400 hover:text-white"
			htmlFor={id}
		>
			<svg
				className="w-8 h-8"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
			</svg>
			<span className="mt-2 text-sm leading-normal">
				{percent > 0 && percent < 100
					? `Uploading... ${percent}%`
					: label}
			</span>
			<input
				id={id}
				type="file"
				className="hidden"
				accept={accept}
				onChange={onChange}
			/>
		</label>
		{value && (
			<div className="text-sm cursor-default">
				{accept === "audio/*" && (
					<audio controls>
						<source src={value} />
					</audio>
				)}
				{accept === "video/*" && <video controls src={value} />}
				{accept === "image/*" && (
					<img
						src={value}
						alt={value?.split("/").pop()}
						className="object-cover h-72 w-72"
					/>
				)}
				{/* {value?.split("/").pop()} */}
			</div>
		)}
	</div>
);

export default UploadGroup;
