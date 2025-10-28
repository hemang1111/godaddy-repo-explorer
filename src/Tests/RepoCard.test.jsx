import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import repolistReducer from "../redux/RepoListSlice";
import Repolist from "../Component/Repolist";
import "@testing-library/jest-dom";


// Mock Redux store
const store = configureStore({
  reducer: { repolist: repolistReducer },
  preloadedState: {
    repolist: {
      repoList: [
        {
          id: 1,
          name: "godaddy-test-repo",
          description: "A sample GoDaddy repository",
          forks_count: 15,
          open_issues: 2,
          watchers: 5,
          languages_url: "https://api.github.com/repos/godaddy-test-repo/languages",
        },
        {
          id: 2,
          name: "gdapi-php",
          description: "A PHP client for Go Daddy® REST APIs",
          forks_count: 10,
          open_issues: 2,
          watchers: 31,
          languages_url: "https://api.github.com/repos/gdapi-php/languages",
        },
      ],
    },
  },
});

const setup = () =>
  render(
    <Provider store={store}>
      <Repolist
        fetchData={vi.fn()}
        listRepoShimmer={false}
        setListRepoShimmer={vi.fn()}
      />
    </Provider>
  );

test("opens drawer when repo card is clicked and displays correct repo details", async () => {
  setup();

//************************************************* Card check Start ************************************************//
const repoCard = await screen.findByTestId("repo-card-1");
expect(repoCard).toBeInTheDocument();

const cardUtils = within(repoCard);
expect(cardUtils.getByText("godaddy-test-repo")).toBeInTheDocument();
expect(cardUtils.getByText("A sample GoDaddy repository")).toBeInTheDocument();
//************************************************* Card check End ************************************************//

//************************************************* Open drawer and check details Start ************************************************//
fireEvent.click(repoCard);

const drawer = await screen.findByTestId("repo-drawer");
expect(drawer).toBeInTheDocument();

const drawerUtils = within(drawer);
expect(drawerUtils.getByText(/Details of/i)).toBeInTheDocument();
expect(drawerUtils.getByText("A sample GoDaddy repository")).toBeInTheDocument();
expect(drawerUtils.getByText(/Language\(s\)/i)).toBeInTheDocument();
expect(drawerUtils.getByText(/15 Fork/i)).toBeInTheDocument();
expect(drawerUtils.getByText(/2 Issue/i)).toBeInTheDocument();
expect(drawerUtils.getByText(/5 Watcher/i)).toBeInTheDocument();
});
//************************************************* Open drawer and check details End ************************************************//

//************************************************* Close drawer Start ************************************************//
test("closes drawer when close button is clicked", async () => {
  setup();

  const repoCard = await screen.findByTestId("repo-card-1");
  fireEvent.click(repoCard);

  const drawer = await screen.findByTestId("repo-drawer");
  expect(drawer).toBeInTheDocument();

  const closeBtn = document.querySelector(".rs-drawer-header-close");
  expect(closeBtn).toBeInTheDocument();
  fireEvent.click(closeBtn);
  
  // ✅ Wait for drawer to disappear (transition-safe)
  await waitFor(() => {
      expect(screen.queryByTestId("repo-drawer")).not.toBeInTheDocument();
    });
});
//************************************************* Close drawer End ************************************************//


//************************************************* Refresh Test Start ************************************************//
test("refresh button triggers fetchData", async () => {
    const fetchDataMock = vi.fn();
    
    render(
        <Provider store={store}>
      <Repolist
        fetchData={fetchDataMock}
        listRepoShimmer={false}
        setListRepoShimmer={vi.fn()}
        />
    </Provider>
  );
  
  const refreshBtn = await screen.findByTestId("refresh-btn");
  fireEvent.click(refreshBtn);
  
  expect(fetchDataMock).toHaveBeenCalledTimes(1);
});
//************************************************* Refresh Test End ************************************************//

//************************************************* Search Input ( Positive case) Test Start ************************************************//
test("filters repos correctly using search input (positive case)", async () => {
    render(
        <Provider store={store}>
      <Repolist fetchData={() => {}} listRepoShimmer={false} setListRepoShimmer={() => {}} />
    </Provider>
  );
  
  const searchInput = screen.getByTestId("search-input");
  
  // Initially both repos are visible
  expect(screen.getByText("godaddy-test-repo")).toBeInTheDocument();
  expect(screen.getByText("gdapi-php")).toBeInTheDocument();
  
  // Type a search query matching only "godaddy-test-repo"
  fireEvent.change(searchInput, { target: { value: "gdapi-php" } });
  
  // Only godaddy repo should remain
  expect(screen.queryByText("godaddy-test-repo")).not.toBeInTheDocument();
  expect(screen.getByText("gdapi-php")).toBeInTheDocument();
});
//************************************************* Search Input ( Positive case) Test End ************************************************//


//************************************************* Search Input ( No Data case) Test Start ************************************************//
test("filters repos correctly using search input (negative case)", async () => {
    setup();
    
    const searchInput = await screen.findByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "random-nonexistent-repo" } });
    
    // Repo should not appear
    expect(screen.queryByText(/godaddy-test-repo/i)).not.toBeInTheDocument();
});
//************************************************* Search Input ( No Data case) Test End ************************************************//
