#!/usr/bin/env python3
import os
from notion_client import Client
from notion.client import NotionClient
# from notion_client import AsyncClient
INTEGRATION_SECRET = "secret_Xu08bk0CABeI0oba1qukNJ1DhcJR4QWWYynMqKY58n7"
DBID = "a45b850db69c4c78a6c05bac6adbbd47"
notion = Client(auth=INTEGRATION_SECRET)


def main():
    """ Main entry point of the app """
    # Obtain the `token_v2` value by inspecting your browser cookies on a logged-in (non-guest) session on Notion.so
    client = NotionClient(
        token_v2="d526eb6254c7772035ecc264d85d998e48b561cf29cc63befc1e236351ab99d89f0b22655db5e4f021e8715ea58c7bbd3a5c6ca335ed6734461cdf19f116ac73a8e257e43f88a9fb31503e63dfbc")
    print(client)
    # Replace this URL with the URL of the page you want to edit
    page = client.get_block(
        "https://www.notion.so/upneet/Yurts-in-Big-Sur-California4-4f07237e2050411a9cbea699b6560c79")

    print("The old title is:", page.title)

    # Note: You can use Markdown! We convert on-the-fly to Notion's internal formatted text data structure.
    page.title = "The title has now changed, and has *live-updated* in the browser!"


if __name__ == "__main__":
    """ This is executed when run from the command line """
    main()
