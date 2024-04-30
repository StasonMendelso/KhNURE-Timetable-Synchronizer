import { createFileRoute } from "@tanstack/react-router"
import useTimetables from "../../hooks/useTimetables"
import { Trash2Icon } from "lucide-react"

export const Route = createFileRoute("/_auth/")({
  component: Home,
})

function Home() {
  const { timetables, isLoading } = useTimetables()

  return (
    <div className="flex gap-2">
      <div className="space-y-4 w-64">
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-md" />
          </div>
        ) : (
          <table className="table table-sm">
            <tbody>
              {timetables?.map(timetable => (
                <tr key={timetable.id} className="hover">
                  <td>{timetable.name}</td>
                  <td className="w-6">
                    <button
                      className="btn btn-xs hover:!text-white btn-outline btn-error btn-square"
                      onClick={() =>
                        (
                          document.getElementById(
                            `delete-tt-modal-${timetable.id}`
                          ) as any
                        ).showModal()
                      }
                    >
                      <Trash2Icon size={14} />
                    </button>
                    <dialog
                      id={`delete-tt-modal-${timetable.id}`}
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">
                          Press ESC key or click outside to close
                        </p>
                      </div>
                    </dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button className="btn btn-primary btn-sm w-full">Add Timetable</button>
      </div>
      <div className="flex-1 bg-orange-300" />
    </div>
  )
}
