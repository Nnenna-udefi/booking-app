import React from "react";

interface DeleteProps {
  setIsModalOpen: (value: boolean) => void;
  handleDelete: () => void;
  selectedService: Service;
}
export const DeleteModal = ({
  setIsModalOpen,
  handleDelete,
  selectedService,
}: DeleteProps) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
        <p>
          Are you sure you want to delete the service "{selectedService.name}"?
        </p>
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
