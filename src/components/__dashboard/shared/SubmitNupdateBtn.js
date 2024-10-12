export default function SubmitNupdateBtn({ handleSubmit, isUpdateCreateLoading, id }) {
    return <button
        type="submit"
        aria-label="Submit"
        onClick={handleSubmit}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
        disabled={isUpdateCreateLoading}
    >

        {
            !isUpdateCreateLoading && <span>{id ? "Update" : "Save"}</span>
        }

        {
            isUpdateCreateLoading && <span>{!id ? "Submitting..." : "Updating..."}</span>
        }

    </button>
}