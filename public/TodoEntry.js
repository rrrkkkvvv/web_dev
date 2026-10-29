class TodoEntry {
    id;
    title;
    description;
    isDone;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    render() {
        return `
                <div class="card card-body mt-1 shadow">
                    <h3>
                        ${this.title}
                    </h3>
                    <p class="small">
                        ID: ${this.id}
                    </p>
                    <button data-id="${this.id}" class="btn-solid theme-danger w-100">
                        Delete
                    </button>
                </div>
                `;
    }
}
export default TodoEntry;
