Simple, few pages (default):

    <div>
      <Pagination selected={1} total={50} changeHandler={() => {}} />
    </div>

Advanced:

    <div>
      <Pagination selected={1} total={100} changeHandler={() => {}} />
    </div>

Advanced with 1 sibling around selected item:

    <div>
      <Pagination selected={1} total={100} selectedSiblings={1} changeHandler={() => {}} />
    </div>

Advanced with 2 anchors:

    <div>
      <Pagination selected={1} total={200} anchors={2} changeHandler={() => {}} />
    </div>
