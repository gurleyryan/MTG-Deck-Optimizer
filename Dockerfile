FROM python:3.11-slim

WORKDIR /app

# Copy entire project structure
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt

# Create data directory if it doesn't exist
RUN mkdir -p data/data

# Download initial data
RUN python data/download_scryfall_data.py && mv data/scryfall_all_cards.json data/data/scryfall_all_cards.json

# Expose port
EXPOSE 8000

# Run the application using the run.py script
CMD ["python", "run.py"]
